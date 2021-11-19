/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let output = [];
  let groupsMap = new Map();
  for (let i = 0; i < groupSizes.length; i++) {
    if (groupsMap.has(groupSizes[i])) {
      groupsMap.get(groupSizes[i]).push(i);
    } else {
      groupsMap.set(groupSizes[i], [i]);
    }
  }

  for (let key of groupsMap.keys()) {
    let groupSize = key;
    let groupPeople = groupsMap.get(key);
    while (groupPeople.length) {
      let currentGroup = [];
      for (let i = 0; i < groupSize; i++) {
        currentGroup.push(groupPeople.pop());
      }
      output.push(currentGroup);
    }
  }
  return output;
};
