export class GlobalDispatcher {
	public static eventToHandlers: Set<string> = new Set<string>();

    public static addEvt(evt: string) {
        GlobalDispatcher.eventToHandlers.add(evt);
    }

    public static getHandlers() {
        return GlobalDispatcher.eventToHandlers;
    }
}