import { log } from "console";
import app from "./app.js";
import mongoose from "mongoose";
const port = process.env.PORT;
const DB_CONN_STR = process.env.ATLAS_CONN_STR || "mongodb://localhost:27017";
mongoose.connect(DB_CONN_STR).then(() => {
    console.log("db connected successfully....");
});
app.listen(port, () => {
    log(`server started on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map