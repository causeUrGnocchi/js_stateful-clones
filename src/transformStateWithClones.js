'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */

function transformStateWithClones(state, actions) {
  // write code here
  return actions
    .reduce(
      (history, action) => {
        switch (action.type) {
          case 'clear':
            return history.concat({});
          case 'addProperties':
            return history.concat({
              ...history.at(-1),
              ...action.extraData,
            });
          case 'removeProperties':
            const aux = { ...history.at(-1) };

            for (const key of action.keysToRemove) {
              delete aux[key];
            }

            return history.concat(aux);
        }
      },
      [state],
    )
    .slice(1);
}

module.exports = transformStateWithClones;
