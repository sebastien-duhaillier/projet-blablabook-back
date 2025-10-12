// jest.config.js
export default {
   testEnvironment: 'node',
   transform: {},
   moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1',
   },
};

// dans ce fichier, je configure jest dans notre projet pour qu'il accepte les modules en ES6