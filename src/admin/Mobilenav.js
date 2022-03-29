import React from "react";
import "./Mobilenav.css";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import HomeIcon from "@mui/icons-material/Home";
import TokenIcon from "@mui/icons-material/Token";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArticleIcon from "@mui/icons-material/Article";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LockIcon from "@mui/icons-material/Lock";
import LockClockIcon from "@mui/icons-material/LockClock";

const Mobilenav = () => {
  return (
    <div className="mobo">
      <Link to="/admin/dashboard">
        <p>
          <HomeIcon /> Home
        </p>
      </Link>
      {/*  */}
      <span className="favor">
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<RocketLaunchIcon />}
        >
          <TreeItem nodeId="1" label="Launchpads">
            <Link to="/admin/launchpadList">
              <TreeItem nodeId="2" label="Launcpad List" />
            </Link>

            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create Launcpad" />
            </Link>
          </TreeItem>
        </TreeView>
      </span>
      <span className="favor">
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<LockIcon />}
        >
          <TreeItem nodeId="1" label="Token Locker">
            <Link to="/admin/createtoken">
              <TreeItem nodeId="2" label="Create Token" />
            </Link>

            <Link to="/admin/createtokenlock">
              <TreeItem nodeId="3" label="Create Token Lock" />
            </Link>
            <Link to="/admin/tokenlock">
              <TreeItem nodeId="4" label="Token Locks" />
            </Link>
          </TreeItem>
        </TreeView>
      </span>
      <span className="favor">
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<LockClockIcon />}
        >
          <TreeItem nodeId="1" label="Liquidity Locker">
            <Link to="/admin/createliquiditylock">
              <TreeItem nodeId="2" label="Create Liquidity Lock" />
            </Link>

            <Link to="/admin/liquiditylock">
              <TreeItem nodeId="3" label="Liquidity Locks" />
            </Link>
          </TreeItem>
        </TreeView>
      </span>
      {/*  */}
      <Link to="/admin/createtoken">
        <p>
          <TokenIcon /> Create Token
        </p>
      </Link>
      <Link to="/admin/audit">
        <p>
          <VerifiedUserIcon />
          Audit
        </p>
      </Link>
      <Link to="/admin/audit-process">
        <p>
          <VerifiedUserIcon />
          Audit Process
        </p>
      </Link>
      <Link to="/admin/tutorial">
        <p>
          <YouTubeIcon />
          Vedio Tutorials
        </p>
      </Link>
      <Link to="/admin/docs">
        <p>
          <ArticleIcon />
          Docs
        </p>
      </Link>
      <div>
        <a
          href="https://t.me/finversecapital"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon />
        </a>
        <a
          href="https://twitter.com/FINSToken"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
};

export default Mobilenav;
