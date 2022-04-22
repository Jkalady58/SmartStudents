import Head from "next/head";
import { useState } from "react";
import { connectToDatabase } from "../util/mongodb";
import Todos from "../components/Todos";
import NewTodoForm from "../components/NewTodoForm";

import "tailwindcss/tailwind.css";

export default function Home({ isConnected, todos }) {
  const [allTodos, setAllTodos] = useState(todos || []);

  return (
    <div className="flex justify-center bg-blue-600 min-h-screen">
      <Head>
        <title>Help Desk Ticket Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container bg-white rounded shadow p-6 m-4 w-full lg:w-3/4">
        <h1 className="text-2xl font-bold text-grey-darkest">
         Make a Ticket
        </h1>
        {isConnected ? (
          <>
            <h2 className="text-blue-600 pt-4">
              You are connected to Help Desk DB
            </h2>
            <NewTodoForm setAllTodos={setAllTodos} />
            <Todos allTodos={allTodos} setAllTodos={setAllTodos} />
          </>
        ) : (
          <h2 className="text-yellow-500 pt-4">
            You are NOT connected to Help DB. Check the <code>README.md</code>{" "}
            for instructions.
          </h2>
        )}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { client, db } = await connectToDatabase();
  const isConnected = await client.isConnected();
  const collection = db.collection("todos");

  const todos = await collection.find({}).toArray();

  return { props: { isConnected, todos: JSON.parse(JSON.stringify(todos)) } };
}
