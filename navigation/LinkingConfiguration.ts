import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Wallpaper: {
            screens: {
              WallpaperScreen: 'one',
            },
          },
          Favorite: {
            screens: {
              FavoriteScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
