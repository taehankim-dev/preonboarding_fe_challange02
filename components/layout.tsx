import StyledComponentsRegistry from "@/lib/registry";

type Props = {
  children : React.ReactNode
}

const Layout = ({children} : Props) => {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}

export default Layout;