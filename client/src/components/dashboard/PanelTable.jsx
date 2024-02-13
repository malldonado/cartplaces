import React from "react";
import { Table } from "evergreen-ui";

function PanelTable() {
  return (
    <>
      <Table marginTop="20px" width="60%">
        <Table.Head>
          <Table.SearchHeaderCell />
          <Table.TextHeaderCell>Last Activity</Table.TextHeaderCell>
          <Table.TextHeaderCell>ltv</Table.TextHeaderCell>
          <Table.TextHeaderCell>ltv</Table.TextHeaderCell>
        </Table.Head>
        <Table.VirtualBody height={300}>
          {/* {profiles.map((profile) => (
          <Table.Row key={profile.id} isSelectable onSelect={() => alert(profile.name)}>
            <Table.TextCell>{profile.name}</Table.TextCell>
            <Table.TextCell>{profile.lastActivity}</Table.TextCell>
            <Table.TextCell isNumber>{profile.ltv}</Table.TextCell>
          </Table.Row>
        ))} */}
        </Table.VirtualBody>
      </Table>
    </>
  );
}

export default PanelTable;
