import { sequelize, DataTypes, Model } from "../config/configBD";

class Products extends Model {}
Products.init(
  {
    product_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    product_name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT(10, 2), allowNull: false },
    is_stock: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    modelName: "Product",
  }
);

export { Products };
