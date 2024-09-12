import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'getAboutMe' : ActorMethod<[], string>,
  'getFunFacts' : ActorMethod<[], Array<string>>,
  'getMoodMeter' : ActorMethod<[], bigint>,
  'getProjects' : ActorMethod<[], Array<[string, string, [] | [string]]>>,
  'getRandomQuote' : ActorMethod<[], string>,
  'updateMoodMeter' : ActorMethod<[bigint], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
