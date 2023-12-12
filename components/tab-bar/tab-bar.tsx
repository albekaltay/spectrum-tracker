import React from "react";
// style
import { TabContainer, TabItem } from "./tab-bar.styles";
// next
import { usePathname } from "next/navigation";
import Link from "next/link";

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

const TabBar = ({ items }: any) => {
  const pathName = usePathname();

  const handleSelected = (itemPathName: string) => {
    return pathName === itemPathName;
  };

  return (
    <TabContainer>
      {items.map((item: any) => (
        <Link key={item.name} href={item.pathName} legacyBehavior>
          <TabItem selected={handleSelected(item.pathName)}>
            {item.name}
          </TabItem>
        </Link>
      ))}
    </TabContainer>
  );
};

export default TabBar;
