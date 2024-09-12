export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getAboutMe' : IDL.Func([], [IDL.Text], ['query']),
    'getFunFacts' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'getMoodMeter' : IDL.Func([], [IDL.Nat], []),
    'getProjects' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text, IDL.Opt(IDL.Text)))],
        ['query'],
      ),
    'getRandomQuote' : IDL.Func([], [IDL.Text], []),
    'updateMoodMeter' : IDL.Func([IDL.Nat], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
