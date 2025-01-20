import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-black text-white w-full">
      <div className="flex flex-row md:flex-row w-10/12 mx-auto gap-4 items-center justify-between p-4">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent
              side={"left"}
              className="text-white bg-black z-[9999]"
            >
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  <ul className="flex flex-col gap-2 w-40 p-4 text-left">
                    <li>
                      <Link to="/">Maps</Link>
                    </li>
                    <li>
                      <Link to="/testwms">WMS Map</Link>
                    </li>

                    <li>
                      <Link to="/editable">Leaflet-Editable</Link>
                    </li>
                    <li>
                      <Link to="/editablegeoman">Geoman</Link>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="text-2xl">NRAMS SandBox</div>

        <ul className="hidden md:flex flex-col md:flex-row gap-4 ">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-black text-white">
                  Some maps
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col gap-2 w-40 p-4">
                    <li>
                      <Link to="/">Maps</Link>
                    </li>
                    <li>
                      <Link to="/testwms">WMS Map</Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-black text-white">
                  Editable maps
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col gap-2 w-40 p-4">
                    <li>
                      <Link to="/editable">Leaflet-Editable</Link>
                    </li>
                    <li>
                      <Link to="/editablegeoman">Geoman</Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ul>
      </div>
    </div>
  );
};

export default Header;
