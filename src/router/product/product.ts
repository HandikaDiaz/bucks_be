import { Router } from "express";
import * as productController from "../../controllers/product-controller";
import { authentication } from "../../middlewares/authtentication";
import multer from "../../middlewares/multer";

const productRouter = Router();

productRouter.get('/get-all', productController.GetAllProduct);
productRouter.get('/get-by-id/:id', productController.GetProductById);
productRouter.post('/create', authentication, multer.single("image"), productController.CreateProduct);
productRouter.put("/update/:id", authentication, multer.single("image"), productController.UpdateProduct);
productRouter.delete("/delete/:id",  productController.DeleteProduct);

export default productRouter;