import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined, TeamOutlined, ShoppingCartOutlined, PoundOutlined, QrcodeOutlined, LaptopOutlined, TwitterOutlined, GithubOutlined, SolutionOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
return (
<div className="nav-container">
        <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo"><Link to="/">TACHODX Markets</Link></Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>
        {activeMenu && (
       <Menu theme="dark">    
  <Menu.Item icon={<HomeOutlined />}>
  <Link to="/">Home</Link>
    </Menu.Item>
  <Menu.Item icon={<HomeOutlined />}>
  <a href="https://tachodx.org/">TachoDx Organization</a>
          </Menu.Item>
  <Menu.Item icon={<FundOutlined />}>
     <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
  <Menu.Item icon={<BulbOutlined />}>
        <Link to="/news">News</Link>
   </Menu.Item>
  <Menu.Item icon={<ShoppingCartOutlined />}>
        <a href="https://tachodx.net/">TachoDx Store</a>
   </Menu.Item>
        <Menu.Item icon={<PoundOutlined />}>
        <a href="https://tachodx.com/investment/">Investments</a>
        </Menu.Item>
        <Menu.Item icon={<QrcodeOutlined />}>
         <a href="https://tacho.tachodx.org/">Tacho Asset</a>
        </Menu.Item>
        <Menu.Item icon={<SolutionOutlined />}>
        <a href="https://jobs.tachodx.org/">Apply for a job now </a>
        </Menu.Item>
        <Menu.Item icon={<LaptopOutlined />}>
        <a href="https://academy.tachodx.org/">TachoDx Academy</a>
        </Menu.Item>
        <Menu.Item icon={<TwitterOutlined />}>
        <a href="https://twitter.com/tachodx/">Follow us </a>
        </Menu.Item>
        <Menu.Item icon={<GithubOutlined />}>
        <a href="https://github.com/tachodx/">participate with us </a>
        </Menu.Item>
        <Menu.Item icon={<TeamOutlined />}>
        <a href="https://staff.tachodx.org/">TachoDx Team </a>
        </Menu.Item>

      </Menu>
      )}
    </div>
  );
};

export default Navbar;
