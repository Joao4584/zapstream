
import FormLoginComponent from "@/src/app/(pages)/auth/login/form"
import LoginPage from "@/src/app/(pages)/auth/login/page"
import { render, screen } from "@testing-library/react"

describe("ShowComponentLogin", () =>{
    it("should render correctly", () => {
        render(<LoginPage />)


        expect(screen.getByText("Faça login na sua conta")).toBeInTheDocument();
    })
})