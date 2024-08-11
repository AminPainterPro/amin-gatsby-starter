import { GatsbyNode } from 'gatsby';

const cloudinaryFields = ['contentfulServiceImagesJsonNode'];

export const onCreateNode: GatsbyNode['onCreateNode'] = gatsbyUtils => {
  const { node, actions, createNodeId, createContentDigest } = gatsbyUtils;
  const { createNode } = actions;

  if (!cloudinaryFields.includes(node.internal.type)) return;

  // Create the correct data shape
  const cloudinaryAssetData = {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    publicId: node.public_id,
    originalHeight: node.height,
    originalWidth: node.width,
    originalFormat: node.format,
  };

  // Create a Gatsby node with the correct data shape
  createNode({
    ...cloudinaryAssetData,
    id: createNodeId(`${node.internal.type} >>> ${node.public_id}`),
    parent: node.id,
    internal: {
      type: 'CloudinaryAsset',
      contentDigest: createContentDigest(cloudinaryAssetData),
    },
  });
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  // Update the schema to add a link to the node with the correct shape
  actions.createTypes(`
    ${cloudinaryFields.map(
      field => `
        type ${field} implements Node {
          cloudinaryImage: CloudinaryAsset @link(by: "publicId", from: "public_id")
        }
      `
    )}
  `);
};
