import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import { Dashboard } from "./modules/Dashboard/pages/Dashboard"
import Login from "./modules/Login/pages/Login"
import ProtectedRoute from "./routes/ProtectedRoute"
import { TaskProvider } from "./context/TaskContext"
import { Provider } from "react-redux"
import store from "./reducers/store"
import { Toaster } from "sonner"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { AlumnosIndex } from "./modules/Alumnos/pages/AlumnosIndex"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />

  },
  {
    path: "/",
    element: <ProtectedRoute><Layout /></ProtectedRoute>,
    children: [
      {
        path: "/",
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>
      },
      {
        path: "/becarios",
        element: <AlumnosIndex />
      },
    ]
  },
])


const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <TaskProvider>
          <Toaster richColors />
             <RouterProvider router={router} />
        </TaskProvider>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default App