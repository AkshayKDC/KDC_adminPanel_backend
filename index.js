require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./src/Config/dbConfig");
const cors =require("cors");

// Import Port form .env
const PORT = process.env.PORT || 8080;

// Import all KDC Admin Panel Routes
const AdminAuthRouter=require("./src/Routes/Admin_Panel/Auth/auth.Router")
const CustomerRouter=require("./src/Routes/Admin_Panel/Customer/customer.Router")
const PaymentRouter=require("./src/Routes/Admin_Panel/Payment/payment.Router")
const RollAndPermissionRouter=require("./src/Routes/Admin_Panel/Role_&_Permission/role_permission.Router")
const AdminSupportRouter=require("./src/Routes/Admin_Panel/Support/support.Router")
const UserManagementRouter=require("./src/Routes/Admin_Panel/User_Management/user_management.Router")

// Import all Customer Portal Routes
const CustomerAuthRouter=require("./src/Routes/Customer_Portal/Auth/auth.Router")
const CustomerEnquiryRouter=require("./src/Routes/Customer_Portal/Enquiry/enquiry.Router")
const CustomerPaymentRouter=require("./src/Routes/Customer_Portal/Payment/payment.Router")
const CustomerPORouter=require("./src/Routes/Customer_Portal/PurchaseOrder/purchase_order.Router")
const CustomerQuotationRouter=require("./src/Routes/Customer_Portal/Quotation/quotation.Router")
const CustomerSalesOrderRouter=require("./src/Routes/Customer_Portal/SalesOrder/sales_order.Router")
const CustomerSupportRouter=require("./src/Routes/Customer_Portal/Support/support.Router")


app.use(express.json());
app.use(cors());


// all routes of KDC admin Panel are use here
app.use("/admin/auth",AdminAuthRouter);
app.use("/admin/customer",CustomerRouter);
app.use("/admin/payment",PaymentRouter);
app.use("/admin/R&P",RollAndPermissionRouter);
app.use("/admin/support",AdminSupportRouter);
app.use("/admin/userManagement",UserManagementRouter);

// all routes of Customer Portal are use here
app.use("/customer/auth",CustomerAuthRouter);
app.use("/customer/enquiry",CustomerEnquiryRouter);
app.use("/customer/payment",CustomerPaymentRouter);
app.use("/customer/po",CustomerPORouter);
app.use("/customer/quotation",CustomerQuotationRouter);
app.use("/customer/salesOrder",CustomerSalesOrderRouter);
app.use("/customer/support",CustomerSupportRouter);





app.get("/", async (req, res) => {
  try {
    return res.send("Hello World! These is Basic Route");
  } catch (error) {
    return res.send(error.message);
  }
});
app.get("/auth", async (req, res) => {
  try {
    return res.send("Hello World! These is auth Basic Route");
  } catch (error) {
    return res.send(error.message);
  }
});
app.get("/customer", async (req, res) => {
  try {
    return res.send("Hello World! These is customer Basic Route");
  } catch (error) {
    return res.send(error.message);
  }
});



app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`listening on http//:localhost/${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
