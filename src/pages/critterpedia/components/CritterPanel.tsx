import {Card, CardActionArea, Tooltip, useTheme} from "@material-ui/core";
import {Help, Warning} from "@material-ui/icons";
import {useTranslation} from "react-i18next";
import {useData, useTime} from "../../../context";
import '../../../prototype_mods';
import {getCritterLocation, getCritterName} from '../data';
import {bugs, fish} from '../data.json';
import SearchParameters from "../search_parameters";
import CritterDialogue from "./CritterDialogue";
import './CritterPanel.scss';

interface CritterPanelProps {
    data: (typeof bugs[0]) | (typeof fish[0]);
    type: 'bug' | 'fish';
    searchParameters: SearchParameters;
    open: boolean;
    setOpenDialogue: (value: number | null) => void;
}
function CritterPanel(props: CritterPanelProps) {
    const {t} = useTranslation('critterpedia');
    const time = useTime();
    const {settings, critterpedia} = useData();
    const hours = (
        settings.hemisphere == 'north' ?
            props.data.hours :
            props.data.hours.rotated(6)
    );
    const theme = useTheme();
    const palette = theme.palette;
    const activeNow = hours[time.getMonth()][time.getHours()];
    const activeMonth = hours[time.getMonth()].reduce((a, b) => a || b);
    const leavingSoon = activeMonth && !hours[(time.getMonth() + 1) % 12].reduce((a, b) => a || b);
    const state = (
        props.type === 'bug'
            ? critterpedia.bugs
            : critterpedia.fish
    )[props.data.index];
    const {
        activeRequired,
        location,
        name,
        price,
        priceComparison,
        size,
        stateRequired,
    } = props.searchParameters;
    let shadow = '';
    if (props.type == 'fish') {
        shadow = t(`critterpedia:fish.size.${(props.data as typeof fish[0]).shadow}`);
    }
    let match = true;
    if (activeRequired === 'now' && !activeNow) {
        match = false;
    } else if (activeRequired === 'month' && !activeMonth) {
        match = false;
    } else if (activeRequired === 'until_next' && !leavingSoon) {
        match = false;
    } else if (!getCritterLocation(props.data, props.type, t).includes(location.toLowerCase())) {
        match = false;
    } else if (!getCritterName(props.data, props.type, t).includes(name.toLowerCase())) {
        match = false;
    } else if (props.type == 'fish' && !shadow.includes(size.toLowerCase())) {
        match = false;
    } else if (stateRequired === 'unobtained' && state.obtained) {
        match = false;
    } else if (stateRequired === 'unmodelled' && state.modelled) {
        match = false;
    } else {
        switch (priceComparison) {
            case '>=':
                if (props.data.price < price) {
                    match = false;
                }
                break;
            case '=':
                if (props.data.price != price) {
                    match = false;
                }
                break;
            case '<=':
                if (props.data.price > price) {
                    match = false;
                }
                break;
        }
    }

    const title = [
        t(`critterpedia:panel.type.${props.type}`, {name: getCritterName(props.data, props.type, t).capitalise(), index: props.data.index + 1}),
        (activeMonth ? (leavingSoon ? t('critterpedia:panel.status.leaving_soon') : '') : t('critterpedia:panel.status.unavailable')),
        (activeNow ? t('critterpedia:panel.status.now') : ''),
        (state.modelled ? t('critterpedia:panel.status.modelled') : ''),
        t('critterpedia:panel.status.details'),
    ].filter((elem) => !!elem).join('\n');

    return <>
        <Tooltip title={title}>
            <Card
                className="critter-panel"
                style={
                    {
                        backgroundColor: state.modelled
                            ? palette.modelled.transparent
                            : (
                                state.obtained
                                    ? palette.primary.transparent
                                    : (
                                        activeMonth
                                            ? undefined
                                            : palette.error.transparent
                                    )
                            ),
                        borderColor: state.modelled
                            ? palette.modelled.main
                            : (
                                activeMonth
                                    ? (
                                        state.obtained
                                            ? palette.primary.main
                                            : undefined
                                    )
                                    : palette.error.main
                            ),
                        opacity: match ? 1 : theme.palette.opacity,
                    }
                }
            >
                <CardActionArea onClick={() => props.setOpenDialogue(props.data.index)}>
                    {
                        leavingSoon
                            ? <Warning style={{
                                color: state.modelled
                                    ? palette.modelled.main
                                    : palette.error.main,
                            }} />
                            : <Help style={{
                                color: state.modelled
                                    ? palette.modelled.main
                                    : (
                                        activeMonth
                                            ? (
                                                state.obtained
                                                    ? palette.primary.main
                                                    : undefined
                                            )
                                            : palette.error.main
                                    ),
                            }} />
                    }
                    <img src={
                        `assets/${props.type}/${props.data.index.toString().padStart(2, '0')
                        }.png`
                    } />
                </CardActionArea>
            </Card>
        </Tooltip>
        <CritterDialogue {...props} />
    </>;
}
export default CritterPanel;