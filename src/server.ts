import app from "./app";
import { env } from "./config/env";

const PORT = Number(env.PORT);

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server running on port ${PORT}`);
});