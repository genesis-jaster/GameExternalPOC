import { GlobalDispatcher } from 'core';
import { GenplusController } from 'genplus';

GlobalDispatcher.addEvt('app-evt1');
GlobalDispatcher.addEvt('app-evt2');
GlobalDispatcher.addEvt('app-evt3');

console.log('Events in app', GlobalDispatcher.getHandlers());

console.log('Events after GenplusController constructor', new GenplusController().getGlobalDispatcherEvents());


