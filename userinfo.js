// userInfo.js

/**
 * Function to create user profiles with original names, modified names, and auto-incremented IDs.
 * @param {Array} originalNames - Array of original names.
 * @param {Array} modifiedNames - Array of modified names.
 * @returns {Array} Array of user profile objects.
 */
function createUserProfiles(originalNames, modifiedNames) {
  if (originalNames.length !== modifiedNames.length) {
    throw new Error('The length of original names and modified names arrays must be equal.');
  }

  return originalNames.map((originalName, index) => ({
    originalName: originalName,
    modifiedName: modifiedNames[index],
    id: index + 1
  }));
}

// Example usage:
// const originalNames = ['Alice', 'Bob', 'Charlie'];
// const modifiedNames = ['Alice1', 'Bob1', 'Charlie1'];
// const userProfiles = createUserProfiles(originalNames, modifiedNames);
// console.log(userProfiles);

module.exports = createUserProfiles;
