import {Button, Card, Checkbox, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControlLabel, Grid, IconButton, makeStyles, TextField, Toolbar, Tooltip, useTheme} from "@material-ui/core";
import {ChevronLeft, ChevronRight, Cloud, WbSunny} from "@material-ui/icons";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";
import {Centred} from "../../../components";
import {useNDContext} from "../../../context";
import {numberFormatters} from "../../../i18n";
import {getCritterLocation, getCritterName, getCritterQuote} from "../data";
import {bugs, fish} from '../data.json';
import './CritterDialogue.scss';
import MonthPanels from "./MonthPanels";
import TimeTracker from "./TimeTracker";

const useStyles = makeStyles((theme) => createStyles({
    modelled: {
        color: theme.palette.modelled.main,
        '&.Mui-disabled': {
            color: theme.palette.modelled.transparent,
        },
    },
}));

const shadows = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "six_fin",
    "six_narrow",
];

interface CritterDialogueProps {
    data: (typeof bugs[0]) | (typeof fish[0]);
    type: 'bug' | 'fish';
    obtained: boolean;
    modelled: boolean;
    stored: number;
    setObtained: (value: boolean) => void;
    setModelled: (value: boolean) => void;
    setStored: (value: number) => void;
    open: boolean;
    setOpenDialogue: (value: number | null) => void;
}
export default function CritterDialogue(props: CritterDialogueProps) {
    const {t} = useTranslation('critterpedia');
    const numberFormatter = numberFormatters[t('core:misc.code')];
    const {time, settings} = useNDContext();
    const hours = (
        settings.hemisphere == 'north' ?
            props.data.hours :
            props.data.hours.rotated(6)
    );
    const theme = useTheme();
    const {palette} = useTheme();
    let shadow;
    if (props.type == 'fish') {
        shadow = t(`critterpedia:fish.size.${(props.data as typeof fish[0]).shadow}`);
    }
    const index = props.data.index.toString().padStart(2, '0');
    const name = getCritterName(props.data, props.type, t).capitalise();
    return <>
        <Dialog
            open={props.open}
            onClose={() => props.setOpenDialogue(null)}
            scroll="body"
            PaperProps={{
                style: {
                    borderColor: props.modelled
                        ? palette.modelled.main
                        : (
                            props.obtained
                                ? palette.primary.main
                                : 'transparent'
                        ),
                    borderWidth: 1,
                    borderStyle: 'solid',
                    width: "75%",
                    transition: 'color 0.5s ease-in-out, border-color 0.5s ease-in-out',
                }
            }}
        >
            <Helmet>
                <title>{t('core:title.browser.page_data', {pageTitle: t('core:pages.critterpedia'), pageData: name})}</title>
            </Helmet>
            <DialogTitle style={{
                paddingBottom: 0,
            }}
            >
                <Toolbar>
                    {
                        props.data.index > 0
                            ? <IconButton edge="start" onClick={() => props.setOpenDialogue(props.data.index - 1)}>
                                {theme.direction == 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                            </IconButton>
                            : <IconButton disabled />
                    }
                    <div style={{
                        textAlign: 'center',
                        color: props.modelled
                            ? palette.modelled.main
                            : (
                                props.obtained
                                    ? palette.primary.main
                                    : undefined
                            ),
                        flexGrow: 1,
                        transition: 'color 0.5s ease-in-out',
                    }}>
                        {name}
                    </div>
                    {
                        props.data.index < 79
                            ? <IconButton edge="end" onClick={() => props.setOpenDialogue(props.data.index + 1)}>
                                {theme.direction == 'ltr' ? <ChevronRight /> : <ChevronLeft />}
                            </IconButton>
                            : <IconButton disabled />
                    }
                </Toolbar>
            </DialogTitle>
            <DialogContent
                style={{
                    textAlign: 'center'
                }}
            >
                {t(`critterpedia:dialogue.type.${props.type}`, {index: numberFormatter(props.data.index + 1)})}
                <br />
                <Divider style={{marginTop: 8, marginBottom: 8}} />
                <div
                    style={{paddingBottom: 8}}
                    dangerouslySetInnerHTML={{
                        __html: getCritterQuote(
                            props.data,
                            props.type,
                            settings.playerName,
                            t
                        )
                    }}
                />
                <MonthPanels
                    months={hours.map(
                        (month) => month.reduce((a, b) => a || b)
                    )}
                    activeMonth={time.getMonth()}
                />
                <TimeTracker
                    hours={hours[time.getMonth()]}
                />
                <Card variant="outlined" style={{marginBottom: 8}}>
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <img src={
                                `assets/${props.type}/${index}.png`
                            } />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className="info">
                                {props.data.dry &&
                                    <Tooltip
                                        title={t('critterpedia:dialogue.details.dry') as string}
                                    >
                                        <div
                                            className="dry"
                                        >
                                            <WbSunny
                                                style={{
                                                    color: theme.palette.summer.main
                                                }}
                                            />
                                        </div>
                                    </Tooltip>
                                }
                                <div className="lfound">{t('critterpedia:dialogue.details.found')}</div>
                                <div className="lsell">{t('critterpedia:dialogue.details.price')}</div>
                                {shadow && <div className="lshadow">{t('critterpedia:dialogue.details.shadow')}</div>}
                                {props.data.rain &&
                                    <Tooltip
                                        title={t('critterpedia:dialogue.details.rain') as string}
                                    >
                                        <div
                                            className="rain"
                                        >
                                            <Cloud
                                                style={{
                                                    color: theme.palette.winter.main
                                                }}
                                            />
                                        </div>
                                    </Tooltip>
                                }
                                <div className="found">{getCritterLocation(props.data, props.type, t)}</div>
                                <div className="sell">{t('core:money.value', {value: numberFormatter(props.data.price)})}</div>
                                {shadow && <div className="shadow">{shadow}</div>}
                            </div>
                        </Grid>
                    </Grid>
                </Card>
                <Grid container>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            value={props.stored.toString()}
                            onChange={(event) => props.setStored(+event.target.value)}
                            type="number"
                            label={t('critterpedia:dialogue.stored')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Centred>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={props.obtained}
                                        onChange={(event) => props.setObtained(event.target.checked)}
                                        color="primary"
                                    />
                                }
                                label={t('critterpedia:dialogue.obtained')}
                            />
                        </Centred>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Centred>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        className={useStyles(theme).modelled}
                                        checked={props.modelled}
                                        disabled={!props.obtained}
                                        onChange={(event) => props.setModelled(event.target.checked)}
                                        color="default"
                                    />
                                }
                                label={t('critterpedia:dialogue.modelled')}
                            />
                        </Centred>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="text"
                    onClick={() => props.setOpenDialogue(null)}
                >{t('core:ui.dismiss')}</Button>
            </DialogActions>
        </Dialog>
    </>;
}