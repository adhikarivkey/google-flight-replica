const images = import.meta.glob("./*.{svg,png,jpg,jpeg}", { eager: true });

const imageAssets = Object.fromEntries(
  Object.entries(images).map(([key, value]) => {
    const fileName = key.split("/").pop(); // Extract only filename
    return [fileName, value.default || value]; // Some builds don't need `.default`
  })
);

export default imageAssets;
