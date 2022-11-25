import Record from "../components/Record";

export default {
  title: "Components/Record",
  component: Record,
  argTypes: {},
};

const Template = (args) => <Record {...args} />;

export const NoMonthLists = Template.bind({});
NoMonthLists.args = {
  month: false,
};

export const ShowMonthLists = Template.bind({});
ShowMonthLists.args = {
  month: true,
};
