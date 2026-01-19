import * as THREE from "three";

// GRASS TEXTURES
const grassAlbedo =
  "/textures/whispy-grass-meadow-bl/wispy-grass-meadow_albedo.png";
const grassAO = "/textures/whispy-grass-meadow-bl/wispy-grass-meadow_ao.png";
const grassHeight =
  "/textures/whispy-grass-meadow-bl/wispy-grass-meadow_height.png";
const grassMetallic =
  "/textures/whispy-grass-meadow-bl/wispy-grass-meado_metallic.png";
const grassNormalOgl =
  "/textures/whispy-grass-meadow-bl/wispy-grass-meadow_normal-ogl.png";
const grassPreview =
  "/textures/whispy-grass-meadow-bl/wispy-grass-meadow_preview.png";
const grassRoughness =
  "/textures/whispy-grass-meadow-bl/wispy-grass-meadow_roughness.png";

// SPACE CRUISE
const spaceAlbedo =
  "/textures/space-cruiser-panels2-bl/space-cruiser-panels2_albedo.png";
const spaceAO =
  "/textures/space-cruiser-panels2-bl/space-cruiser-panels2_ao.png";
const spaceHeight =
  "/textures/space-cruiser-panels2-bl/space-cruiser-panels2_height.png";
const spaceMetallic =
  "/textures/space-cruiser-panels2-bl/space-cruiser-panels2_metallic.png";
const spaceNormalOgl =
  "/textures/space-cruiser-panels2-bl/space-cruiser-panels2_normal-ogl.png";
const spacePreview =
  "/textures/space-cruiser-panels2-bl/space-cruiser-panels2_preview.png";
const spaceRoughness =
  "/textures/space-cruiser-panels2-bl/space-cruiser-panels2_roughness.png";

// BADLANDS
const badlandsAlbedo =
  "/textures/badlands-boulders-bl/badlands-boulders_albedo.png";
const badlandsAO = "/textures/badlands-boulders-bl/badlands-boulders_ao.png";
const badlandsHeight =
  "/textures/badlands-boulders-bl/badlands-boulders_height.png";
const badlandsMetallic =
  "/textures/badlands-boulders-bl/badlands-boulders_metallic.png";
const badlandsNormalOgl =
  "/textures/badlands-boulders-bl/badlands-boulders_normal-ogl.png";
const badlandsPreview =
  "/textures/badlands-boulders-bl/badlands-boulders_preview.png";
const badlandsRoughness =
  "/textures/badlands-boulders-bl/badlands-boulders_roughness.png";

// INITIALIZE TEXTURE LOADER
const textureLoader = new THREE.TextureLoader();

// TEXTURE GRASS
export const grassAlbedoTexture = textureLoader.load(grassAlbedo);
export const grassAoTexture = textureLoader.load(grassAO);
export const grassHeightTexture = textureLoader.load(grassHeight);
export const grassMetallicTexture = textureLoader.load(grassMetallic);
export const grassNormalTexture = textureLoader.load(grassNormalOgl);
export const grassPreviewTexture = textureLoader.load(grassPreview);
export const grassRoughnessTexture = textureLoader.load(grassRoughness);

// TEXTURE SPACE
export const spaceAlbedoTexture = textureLoader.load(spaceAlbedo);
export const spaceAoTexture = textureLoader.load(spaceAO);
export const spaceHeightTexture = textureLoader.load(spaceHeight);
export const spaceMetallicTexture = textureLoader.load(spaceMetallic);
export const spaceNormalTexture = textureLoader.load(spaceNormalOgl);
export const spacePreviewTexture = textureLoader.load(spacePreview);
export const spaceRoughnessTexture = textureLoader.load(spaceRoughness);

//TEXTURE BADLANDS
export const badlandsAlbedoTexture = textureLoader.load(badlandsAlbedo);
export const badlandsAoTexture = textureLoader.load(badlandsAO);
export const badlandsHeightTexture = textureLoader.load(badlandsHeight);
export const badlandsMetallicTexture = textureLoader.load(badlandsMetallic);
export const badlandsNormalTexture = textureLoader.load(badlandsNormalOgl);
export const badlandsPreviewTexture = textureLoader.load(badlandsPreview);
export const badlandsRoughnessTexture = textureLoader.load(badlandsRoughness);
