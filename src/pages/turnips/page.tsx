import { Button, Card, CardContent, CardHeader, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, useMediaQuery, useTheme } from "@material-ui/core";
import deepmerge from "deepmerge";
import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Centred } from '../../components';
import { clone, DeepPartial, getDefault } from "../../misc";
import { emptyWeek, Pattern, TurnipsResult, UserTurnipsData } from "./data";

const weekDays: ('mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat')[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export default function Turnips() {
    const foundData = getDefault(window.localStorage.turnips, clone(emptyWeek));
    const [data, setDataImpl] = React.useState(foundData);
    const [confirmOpen, setConfirmOpen] = React.useState(false);
    const [dontAsk, setDontAsk] = React.useState(false);
    function confirm() {
        if (dontAsk) {
            window.localStorage.turnipDontConfirm = 'true';
        }
        setConfirmOpen(false);
        reset();
    }
    function setData(newData: DeepPartial<UserTurnipsData>) {
        let toSet: UserTurnipsData = deepmerge<UserTurnipsData>(data, newData as Partial<UserTurnipsData>);
        window.localStorage.turnips = JSON.stringify(toSet);
        setDataImpl(toSet);
    }
    let result: TurnipsResult[] = [];
    function nextWeek() {
        if (getDefault<boolean>(window.localStorage.turnipDontConfirm, false)) {
            reset();
        } else {
            setConfirmOpen(true);
        }
    }
    function reset() {
        let newData = clone(emptyWeek);
        newData.previousPattern = result.map((result) => result.pattern).reduce((aggregate, next) => {
            if (aggregate === Pattern.UNKNOWN) {
                return Pattern.UNKNOWN;
            }
            if (aggregate === Pattern.AGGREGATE) {
                return next;
            }
            if (next === Pattern.AGGREGATE) {
                return aggregate;
            }
            if (aggregate !== next) {
                return Pattern.UNKNOWN;
            } else {
                return next;
            }
        }, Pattern.UNKNOWN);
        setData(newData);
    }
    const { t } = useTranslation(['core', 'turnips']);
    const theme = useTheme();
    const isXs = !useMediaQuery(theme.breakpoints.up('sm'));
    const firstBuy = <Grid item xs={12} sm={6}>
        <Centred>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={data.firstBuy}
                        onChange={(event) => setData({ firstBuy: event.target.checked })}
                        color="primary"
                    />
                }
                label={t('turnips:prices.first_buy.checkbox')}
                title={t('turnips:prices.first_buy.hover')}
            />
        </Centred>
    </Grid>;
    return <>
        <Helmet>
            <title>{t('core:title.browser.page', { pageTitle: t('core:pages.turnips') })}</title>
        </Helmet>
        <div style={{ maxWidth: 800, margin: 'auto' }}>
            <Card style={{ margin: 16 }}>
                <CardHeader title={t('turnips:prices.title')} />
                <CardContent>
                    <Grid container spacing={1}>
                        {isXs && firstBuy}
                        <Grid item xs={12} sm={6}>
                            <TextField type="number" fullWidth value={data.buy} onChange={(event) => setData({ buy: event.target.value ? +event.target.value : null })} label={t('turnips:prices.buy')} />
                        </Grid>
                        {!isXs && firstBuy}
                        {weekDays.map((day) => (
                            <>
                                <Grid item xs={12} sm={6}>
                                    <TextField type="number" fullWidth value={data[day].am} onChange={(event) => setData({ [day]: { am: event.target.value ? +event.target.value : null } })} label={t('turnips:prices.am', { day: t(`core:time.weekday.${day}.long`) })} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField type="number" fullWidth value={data[day].pm} onChange={(event) => setData({ [day]: { pm: event.target.value ? +event.target.value : null } })} label={t('turnips:prices.pm', { day: t(`core:time.weekday.${day}.long`) })} />
                                </Grid>
                            </>
                        ))}
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id="comp-label">{t('turnips:pattern.label')}</InputLabel>
                                <Select
                                    value={data.previousPattern}
                                    onChange={(event) => setData(
                                        { previousPattern: event.target.value as Pattern }
                                    )}
                                    labelId='pattern-label'
                                    fullWidth
                                >
                                    <MenuItem value={Pattern.SMALL_SPIKE}>{t('turnips:pattern.small_spike')}</MenuItem>
                                    <MenuItem value={Pattern.LARGE_SPIKE}>{t('turnips:pattern.large_spike')}</MenuItem>
                                    <MenuItem value={Pattern.FLUCTUATING}>{t('turnips:pattern.fluctuating')}</MenuItem>
                                    <MenuItem value={Pattern.DECREASING}>{t('turnips:pattern.decreasing')}</MenuItem>
                                    <MenuItem value={Pattern.UNKNOWN}>{t('turnips:pattern.unknown')}</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button style={{ height: '100%' }} fullWidth variant="contained" color="primary" onClick={nextWeek}>{t('turnips:ui.start_next')}</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
        <Dialog open={confirmOpen}>
            <DialogTitle>{t('turnips:ui.reset_dialogue.title')}</DialogTitle>
            <DialogContent>
                {t('turnips:ui.reset_dialogue.text')}
                <br />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={dontAsk}
                            onChange={(event) => setDontAsk(event.target.checked)}
                            color="primary"
                        />
                    }
                    label={t('core:ui.dont_ask')}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setConfirmOpen(false)}>
                    {t('core:ui.cancel')}
                </Button>
                <Button onClick={confirm}>
                    {t('core:ui.confirm')}
                </Button>
            </DialogActions>
        </Dialog>
    </>;
}