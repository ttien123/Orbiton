const listNav = [
  {
    name: "Swap",
    to: "/",
  },
  {
    name: "Advantages",
    to: "/",
  },
  {
    name: "Solution",
    to: "/",
  },
];
const SideNav = () => {
  return (
    <nav>
      <ul className="flex gap-6 text-[12px] text-[#FBFCF4] flex-col md:flex-row mt-6 md:mt-0">
        {listNav.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
