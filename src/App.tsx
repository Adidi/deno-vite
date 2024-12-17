import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { AlertDialog, Button, Flex, Text } from "@radix-ui/themes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button>
      </Flex>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red">Revoke access</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Revoke access</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Are you sure? This application will no longer be accessible and any
            existing sessions will be expired.
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red">
                Revoke access
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <img src="/vite-deno.svg" alt="Vite with Deno" />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
