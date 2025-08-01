import type { Metadata } from "next"
// import { redirect } from "next/navigation"
// import { auth } from "@/auth" // This file does not exist
import { Main } from "@/components/main"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { MobileSidebar } from "@/components/mobile-sidebar"
import { Home, Settings } from "lucide-react"

export const metadata: Metadata = {
  title: "Client Portal",
  description: "Client Portal",
}

const ClientPortalPage = () => {
  // const session = await auth()

  // if (!session?.user) {
  //   redirect("/sign-in")
  // }

  return (
    <SidebarProvider>
      <div className="h-full bg-background">
        <div className="hidden md:block">
          <Sidebar>
            <SidebarHeader>
              <SidebarTrigger />
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Home" isActive>
                    <Home />
                    Home
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Settings">
                    <Settings />
                    Settings
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>{/* Footer content */}</SidebarFooter>
          </Sidebar>
        </div>
        <div className="md:hidden">
          <MobileSidebar />
        </div>
        <Main>
          <div className="p-4">
            <h1 className="text-2xl font-bold">Client Portal</h1>
            <p>Welcome to your client portal.</p>
            {/* Page content goes here */}
          </div>
        </Main>
      </div>
    </SidebarProvider>
  )
}

export default ClientPortalPage
