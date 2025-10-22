import React from "react";
import "../Css/Footer.css";
import facebookIcon from "../assets/facebook.png";
import metaIcon from "../assets/meta.png";
import instagramIcon from "../assets/instagram.png";

export default function Footer() {
    const payments = [
        "Payment Gateway",
        "Payment Links",
        "Payment Methods",
        "Bulk Payment",
        "Invoice",
    ];
    const banking = ["Current Account", "Accounting", "API Banking", "UPI Autopay", "Tax Payment", "Cards", "CMS"];
    const company = ["About us", "Careers", "Contact us"];

    const leftCount = 5;
    const bankingLeft = banking.slice(0, leftCount);
    const bankingRight = banking.length > leftCount ? banking.slice(leftCount) : [];

    return (
        <footer className="site-footer">
            <div className="container-lg">
                <div className="row gy-4 align-items-start">
                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="footer-brand mb-3">
                            <div className="brand-text">UzOPay</div>
                        </div>

                        <p className="footer-desc">
                            Our payment gateway simplifies transactions for e-commerce businesses, delivering fast
                            and secure processing. With smooth integration, we enhance your store's payment capabilities.
                        </p>

                        <div className="footer-socials d-flex align-items-center gap-1 mt-4">
                            <a href="#" aria-label="Facebook" className="footer-social-link">
                                <img src={facebookIcon} alt="Facebook" className="footer-social-icon" />
                            </a>
                            <a href="#" aria-label="Meta" className="footer-social-link">
                                <img src={metaIcon} alt="Meta" className="footer-social-icon" />
                            </a>
                            <a href="#" aria-label="Instagram" className="footer-social-link">
                                <img src={instagramIcon} alt="Instagram" className="footer-social-icon" />
                            </a>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-2 footer-col">
                        <h6 className="footer-col-title">Payment</h6>
                        <ul className="list-unstyled footer-links">
                            {payments.map((p) => (
                                <li key={p}>
                                    <a href="#">{p}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 footer-col">
                        <h6 className="footer-col-title">AI Banking</h6>

                        <div className="d-flex footer-links-split">
                            <ul className="list-unstyled footer-links me-3">
                                {bankingLeft.map((b) => (
                                    <li key={b}><a href="#">{b}</a></li>
                                ))}
                            </ul>

                            {bankingRight.length > 0 && (
                                <ul className="list-unstyled footer-links">
                                    {bankingRight.map((b) => (
                                        <li key={b}><a href="#">{b}</a></li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-2 footer-col">
                        <h6 className="footer-col-title">Company</h6>
                        <ul className="list-unstyled footer-links">
                            {company.map((c) => (
                                <li key={c}>
                                    <a href="#">{c}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
