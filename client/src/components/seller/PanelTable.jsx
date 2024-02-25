import React from "react";
import { Table } from "evergreen-ui";

function PanelTable() {
  return (
    <div className="w-[50%]">
      <Table className="panel-cards" borderColor="#e5e7eb" marginTop="20px" width="100%" color='#000' background="#fff">
        <Table.Head color='#000' borderColor="#e5e7eb" backgroundColor="#fff" background="#fff">
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
    </div>
  );
}

export default PanelTable;
