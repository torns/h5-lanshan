import { pageBackgroundChannel } from '@/utils/styleChannel'
import { setLocalStorage } from "@/utils/storage";

export default {
    project: state => state.common.project,
    pageBackground: state => {
        console.log(state.common.widgetPage.config);
        return pageBackgroundChannel(state.common.widgetPage.config)
    },
    currentWidget: state => state.common.currentWidget,
    chooseWidget: state => state.common.chooseWidget,
    widgetList: state => state.common.widgetList,
    widgetPage: state => {
        setLocalStorage('page', state.common.widgetPage)
        return state.common.widgetPage
    },
    widgetLocation: state => state.common.widgetLocation,
    widgetRef: state => state.common.widgetRef,
}
