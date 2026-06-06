import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import "../styles/Dashboard.css";
import AnalyticsChart from "../components/AnalyticsChart";
import RecentTransactions from "../components/RecentTransactions";
import { useEffect, useState } from "react";
import API from "../Services/api";

function Dashboard() {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        fetchAccounts();
    }, []);

    const fetchAccounts = async () => {
        try {
            const response = await API.get("/accounts");
            setAccounts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Sidebar />
            <Navbar />

            <div className="dashboard">

                <div className="hero-section">

                    <div className="balance-card">
                        <span>Total Portfolio Value</span>
                        <h1>₹ 9,000</h1>
                        <p>+12.5% this month</p>

                        <div className="hero-buttons">
                            <button className="deposit-btn">
                                Deposit
                            </button>

                            <button className="transfer-btn">
                                Transfer
                            </button>
                        </div>
                    </div>

                    <div className="credit-card">
                        <p>Elite Bank Premium</p>

                        <h2>** ** 1001</h2>

                        <div className="card-footer">
                            <span>Raj Singh</span>
                            <span>12/30</span>
                        </div>
                    </div>

                </div>

                <div className="stats-grid">

                    <div className="stat-card">
                        <h3>Total Accounts</h3>
                        <h1>{accounts.length}</h1>
                    </div>

                    <div className="stat-card">
                        <h3>Total Deposits</h3>
                        <h1>₹ 2,000</h1>
                    </div>

                    <div className="stat-card">
                        <h3>Total Withdrawals</h3>
                        <h1>₹ 1,000</h1>
                    </div>

                    <div className="stat-card">
                        <h3>Total Transfers</h3>
                        <h1>₹ 1,500</h1>
                    </div>

                </div>

                <div className="dashboard-row">

                    <div className="quick-actions">

                        <h2>Quick Actions</h2>

                        <div className="action-grid">

                            <button>💰 Deposit</button>

                            <button>📤 Withdraw</button>

                            <button>🔄 Transfer</button>

                            <button>🏦 Accounts</button>

                        </div>

                    </div>

                    <div className="recent-transactions">

                        <h2>Recent Transactions</h2>

                        <table>

                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td>Deposit</td>
                                    <td>₹ 2000</td>
                                    <td className="success">Success</td>
                                </tr>

                                <tr>
                                    <td>Transfer</td>
                                    <td>₹ 1000</td>
                                    <td className="success">Success</td>
                                </tr>

                                <tr>
                                    <td>Withdraw</td>
                                    <td>₹ 500</td>
                                    <td className="success">Success</td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

                <div className="dashboard-bottom">

                    <AnalyticsChart />

                    <RecentTransactions />

                </div>

            </div>
        </>
    );
}

export default Dashboard;