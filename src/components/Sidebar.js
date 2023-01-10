import Link from './Link';

function SideBar({links}) {
  const renderedLinks = links.map((link) => {
    return <Link key={link.label} to={link.path}>{link.label}</Link>;
  });

  return renderedLinks;
} 

export default SideBar;