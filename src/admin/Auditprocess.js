import React from "react";
import "./Auditprocess.css";
import AuditPhoto from "./audit.png";
import Arrow from "./arrow.png";

const Auditprocess = () => {
  return (
    <>
      <div className="audit_div">
        <h2>Audit Service</h2>
        <div className="audit_div_div">
          <div>
            <p>
              A comprehensive smart contracts audit to identify vulnerabilities
              and prove the correctness of your contract code with highly
              scalable Formal Verification techniques, Secure your token with
              us.
            </p>
            <button>CONTACT</button>
          </div>
          <div className="gone">
            <img src={AuditPhoto} alt="audit" />
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="audit_div">
        <h4>Features</h4>
        <div className="feature">
          <div>
            <div className="feature_div1 help">
              <p className="feature_subtitle">Smart Contract Auditing</p>
              <div className="title-explain">
                <p>We provide fast & quality audits for smart contracts.</p>
              </div>
            </div>
            <div className="feature_div1">
              <p className="feature_subtitle">Identify Errors & Risks</p>
              <div className="title-explain">
                <p>Understand your smart contract issues and vulnerabilites.</p>
              </div>
            </div>
          </div>
          {/*//////////////////////////////////////////////////////////////////////  */}

          <div className="features-img">
            <img src={Arrow} alt="anticlockwise" />
          </div>
          {/* /////////////////////////////////////////////////////////////////////// */}
          <div>
            <div className="feature_div1 help">
              <p className="feature_subtitle">Audited & Secure Token</p>
              <div className="title-explain">
                <p>
                  Brig your community a scure product to avoid having future
                  issues.
                </p>
              </div>
            </div>
            <div className="feature_div1">
              <p className="feature_subtitle">Audit List</p>
              <div className="title-explain">
                <p>Become one of the tokens in our audited tokens list.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="audit_div">
        <h4>Easy Process</h4>
        <div className="audit_div_div">
          <div className="phase">
            <h3>Phase 1</h3>
            <h3>Share Source Code</h3>
          </div>
          <div className="gone">
            {" "}
            &rarr; &rarr;&rarr;&rarr;&rarr;&rarr;&rarr;{" "}
          </div>
          <div className="phase">
            <h3>Phase 2</h3>
            <h3>Receive Quote</h3>
          </div>
          <div className="gone">
            {" "}
            &rarr; &rarr;&rarr;&rarr;&rarr;&rarr;&rarr;{" "}
          </div>

          <div className="phase">
            <h3>Phase 3</h3>
            <h3>Begin Vulnerability Inspection</h3>
          </div>
          <div className="gone">
            {" "}
            &rarr; &rarr;&rarr;&rarr;&rarr;&rarr;&rarr;{" "}
          </div>

          <div className="phase">
            <h3>Phase 4</h3>
            <h3>Deliver Report</h3>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="audit_div">
        <h4>Report Info Content</h4>
        <div className="audit_div_div">
          <div>
            <p>
              Our audit reports are custom, thorough, and transparent. The
              report will contain the details of any identified vulnerabilities
              and classify them by severity (Critical, Major, Medium, Low, and
              Informational)
            </p>
            <p>
              With every successful audit, we'll provide you with a listing on
              the CoinStarter Security Leaderboard that is shared publicly with
              the entire crypto community.
            </p>
          </div>
          <div className="late">
            <h4>Don't wait until it's too late.</h4>
            <button>CONTACT</button>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default Auditprocess;
