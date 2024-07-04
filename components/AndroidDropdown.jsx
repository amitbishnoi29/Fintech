import RoundBtn from "@/components/RoundBtn";
import { Ionicons } from "@expo/vector-icons";
import * as DropdownMenu from "zeego/dropdown-menu";

const AndroidDropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <RoundBtn icon={"ellipsis-horizontal"} text={"More"} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content>
        <DropdownMenu.Item key="statement">
          <DropdownMenu.ItemTitle>Statement</DropdownMenu.ItemTitle>

          <DropdownMenu.ItemIcon
            ios={{
              name: "add",
              pointSize: 24,
            }}
          ><Ionicons name="checkmark-circle" size={32} color="green" /></DropdownMenu.ItemIcon>
        </DropdownMenu.Item>

        <DropdownMenu.Item key="converter">
          <DropdownMenu.ItemTitle>Converter</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: "coloncurrencysign.arrow.circlepath",
              pointSize: 24,
            }}
          ></DropdownMenu.ItemIcon>
        </DropdownMenu.Item>

        <DropdownMenu.Item key="background">
          <DropdownMenu.ItemTitle>Background</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: "photo.fill",
              pointSize: 24,
            }}
          ></DropdownMenu.ItemIcon>
        </DropdownMenu.Item>

        <DropdownMenu.Item key="account">
          <DropdownMenu.ItemTitle>Add new account</DropdownMenu.ItemTitle>
          <DropdownMenu.ItemIcon
            ios={{
              name: "plus.rectangle.on.folder.fill",
              pointSize: 24,
            }}
          ></DropdownMenu.ItemIcon>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
export default AndroidDropdown;
