import { immerable } from "immer";
import { useImmer, type Updater } from "use-immer"

export class Wrapper {
	store: Store
	setStore: Updater<Store>
	constructor() {
		[this.store, this.setStore] = useImmer(new Store());
	}
	set = (...keys: string[]) => 
		(value: any) => this.setStore(draft => {
			for(var key of keys.slice(0, -1)) {
				draft = draft[key];
			}
			draft[keys.at(-1)] = value;
			console.log(this.store);
		});
}

export class Store {
	[immerable] = true
	general
	auto
	teleop
	end
	constructor() {
		this.general = {
			name: "",
			type: "\u00A0",
			match: "",
			replay: false,
			alliance: "\u00A0",
			team: "",
			position: "\u00A0"
		};
		this.auto = {
			coral: {
				one: 0,
				two: 0,
				three: 0,
				four: 0,
				missed: 0
			},
			algae: {
				removed: 0,
				net: 0,
				processor: 0,
				missed: 0
			},
			left: false
		}
		this.teleop = {
			coral: {
				one: 0,
				two: 0,
				three: 0,
				four: 0,
				missed: 0
			},
			algae: {
				removed: 0,
				net: 0,
				processor: 0,
				missed: 0
			},
			fouls: 0
		}
		this.end = {
			cage: {
				attempted: "",
				result: "",
			},
			park: false,
			breakdown: false,
			defense: {
				played: "",
				faced: ""
			},
			comments: ""
		}
	}
}