import { pageBackgroundChannel } from '@/utils/styleChannel'
import { setLocalStorage } from "@/utils/storage";

export default {
    project: state => state.common.project,
    currentWidget: state => state.common.currentWidget,
    chooseWidget: state => state.common.chooseWidget,
    widgetList: state => state.common.widgetList,
    widgetLocation: state => state.common.widgetLocation,
    widgetRef: state => state.common.widgetRef,
    showConfig: state => state.common.showConfig,
    poolData: state => state.common.project.pool,
    viewPage: state => state.view.viewPage,
    widgetPage: state => {
        setLocalStorage('page', state.common.widgetPage)
        return state.common.widgetPage
    },
    pageBackground: state => {
        return pageBackgroundChannel(state.common.widgetPage.config)
    },
}
