import { immerable } from "immer"
import { useImmer, type Updater } from "use-immer"

export type Subset<T> = {
    [P in keyof T]?: Subset<T[P]>;
};

function combine<T>(a: T, b: Subset<T>) {
	for(var [key, value] of Object.entries(b)) {
		if(value !== undefined) {
			if(typeof value == "object") {
				combine((a as any)[key], value as any);
			} else {
				(a as any)[key] = value;
			}
		}
	}
}

export class Wrapper {
	store: Store
	setStore: Updater<Store>
	constructor() {
		[this.store, this.setStore] = useImmer(new Store());
	}
	set = (...keys: string[]) =>
		(value: any) => this.setStore(draft => {
			for(var key of keys.slice(0, -1)) {
				draft = (draft as any)[key];
			}
			(draft as any)[keys.at(-1) as string] = value;
		});
	reset = (keep: Subset<Store>) =>
		this.setStore(draft => combine(draft, {...new Store(), ...keep}))
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
			type: 0,
			match: 1,
			replay: false,
			alliance: 0,
			team: "",
			position: 0
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
				attempted: 0,
				result: 0,
			},
			park: false,
			breakdown: false,
			defense: {
				played: 0,
				faced: 0
			},
			comments: ""
		}
	}
	output() {
		return [
			this.general.name,
			["PRAC", "QUAL", "PLAY"][this.general.type],
			this.general.match,
			this.general.replay,
			["B","R"][this.general.alliance],
			this.general.team,
			this.general.position,

			this.auto.coral.one,
			this.auto.coral.two,
			this.auto.coral.three,
			this.auto.coral.four,
			this.auto.coral.missed,
			this.auto.algae.removed,
			this.auto.algae.net,
			this.auto.algae.processor,
			this.auto.algae.missed,
			this.auto.left,

			this.teleop.coral.one,
			this.teleop.coral.two,
			this.teleop.coral.three,
			this.teleop.coral.four,
			this.teleop.coral.missed,
			this.teleop.algae.removed,
			this.teleop.algae.net,
			this.teleop.algae.processor,
			this.teleop.algae.missed,
			this.teleop.fouls,

			this.end.cage.attempted,
			this.end.cage.result,
			this.end.park,
			this.end.breakdown,
			this.end.defense.played,
			this.end.defense.faced,
			this.end.comments,

			new Date().valueOf()
		].join("\t");
	}
}