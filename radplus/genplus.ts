import { GlobalDispatcher } from 'core';

class GenplusController {
    constructor() {
        GlobalDispatcher.addEvt('genplus-evt-1');
        GlobalDispatcher.addEvt('genplus-evt-2');
        GlobalDispatcher.addEvt('genplus-evt-3');
    }

    getGlobalDispatcherEvents() {
        return GlobalDispatcher.getHandlers();
    }
}

window.genplus = {
    GenplusController
};