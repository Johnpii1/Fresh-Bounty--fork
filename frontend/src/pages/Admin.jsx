import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// You'll need to import your contract address and wagmi hooks (or ethers)
// Example:
// import { useAccount, useContractRead, useContractWrite } from "wagmi";
// import { BOUNTY_ABI } from "../abi";
// import { CONTRACT_ADDRESS } from "../config";

export default function AdminPage() {
  const navigate = useNavigate();

  // ========== STATE (only necessary) ==========
  const [owner, setOwner] = useState(null);
  const [totalEthFees, setTotalEthFees] = useState("0");
  const [totalUsdcFees, setTotalUsdcFees] = useState("0");
  const [feePercent, setFeePercent] = useState("0");
  const [isOwner, setIsOwner] = useState(false);
  const [withdrawAddress, setWithdrawAddress] = useState("");
  const [txLoading, setTxLoading] = useState(false);

  // ========== Get connected wallet (wagmi example) ==========
  // const { address: connectedWallet } = useAccount();

  // ========== READ CONTRACT DATA (comment – you implement) ==========
  useEffect(
    () => {
      async function fetchAdminData() {
        try {
          // 1. Get contract owner
          // const ownerAddress = await contract.owner();
          // setOwner(ownerAddress);
          // 2. Get accumulated fees
          // const ethFees = await contract.totalEthFees();
          // const usdcFees = await contract.totalUsdcFees();
          // setTotalEthFees(ethFees.toString());
          // setTotalUsdcFees(usdcFees.toString());
          // 3. Get fee percentage
          // const fee = await contract.FEE_PERCENT();
          // setFeePercent(fee.toString());
          // 4. Check if connected wallet is owner
          // setIsOwner(connectedWallet?.toLowerCase() === ownerAddress?.toLowerCase());
        } catch (error) {
          console.error("Failed to fetch admin data:", error);
        }
      }
      fetchAdminData();
    },
    [
      /* connectedWallet, owner */
    ],
  );

  // ========== WRITE FUNCTIONS (you implement contract calls) ==========

  const handleWithdraw = async (tokenType) => {
    // tokenType: 0 = ETH, 1 = USDC (based on your TokenType enum)
    setTxLoading(true);
    try {
      // await contract.withdraw(tokenType, withdrawAddress);
      alert(
        `Withdraw ${tokenType === 0 ? "ETH" : "USDC"} to ${withdrawAddress} – implement contract call`,
      );
    } catch (error) {
      console.error("Withdraw failed:", error);
    } finally {
      setTxLoading(false);
    }
  };

  const handleTransferOwnership = async (newOwnerAddress) => {
    if (!newOwnerAddress) return;
    setTxLoading(true);
    try {
      // await contract.transferOwnership(newOwnerAddress);
      alert(
        `Transfer ownership to ${newOwnerAddress} – implement contract call`,
      );
    } catch (error) {
      console.error("Transfer failed:", error);
    } finally {
      setTxLoading(false);
    }
  };

  // ========== ACCESS DENIED IF NOT OWNER ==========
  // if (connectedWallet && owner && !isOwner) {
  //   return (
  //     <div className="flex h-screen items-center justify-center bg-black text-white">
  //       <div className="text-center">
  //         <h1 className="text-2xl font-bold text-red-500">Access Denied</h1>
  //         <p className="mt-2 text-gray-400">Only the contract owner can access this page.</p>
  //         <button onClick={() => navigate("/")} className="mt-4 px-4 py-2 bg-pink-500 rounded">Go Home</button>
  //       </div>
  //     </div>
  //   );
  // }

  // ========== RENDER ADMIN PANEL ==========
  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header with back button */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 border border-pink-500/30 rounded hover:bg-pink-500/10 transition"
        >
          ← Back
        </button>
        <h1 className="text-2xl font-bold text-pink-500">Admin Panel</h1>
        <div className="w-20" /> {/* spacer */}
      </div>

      {/* Contract Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-black border border-pink-500/20 p-4 rounded-xl">
          <h3 className="text-gray-400 text-sm">Contract Owner</h3>
          <p className="text-pink-400 font-mono text-sm break-all">
            {owner || "Loading..."}
          </p>
        </div>
        <div className="bg-black border border-pink-500/20 p-4 rounded-xl">
          <h3 className="text-gray-400 text-sm">Fee Percentage</h3>
          <p className="text-2xl font-bold text-pink-500">{feePercent}%</p>
        </div>
        <div className="bg-black border border-pink-500/20 p-4 rounded-xl">
          <h3 className="text-gray-400 text-sm">Total ETH Fees</h3>
          <p className="text-2xl font-bold text-pink-500">{totalEthFees} ETH</p>
        </div>
        <div className="bg-black border border-pink-500/20 p-4 rounded-xl">
          <h3 className="text-gray-400 text-sm">Total USDC Fees</h3>
          <p className="text-2xl font-bold text-pink-500">
            {totalUsdcFees} USDC
          </p>
        </div>
      </div>

      {/* Withdraw Section */}
      <div className="bg-black border border-pink-500/20 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold text-pink-400 mb-4">
          Withdraw Fees
        </h2>
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm text-gray-400 mb-1">
              Recipient Address
            </label>
            <input
              type="text"
              placeholder="0x..."
              value={withdrawAddress}
              onChange={(e) => setWithdrawAddress(e.target.value)}
              className="w-full bg-black border border-pink-500/20 rounded px-3 py-2 text-white focus:outline-none focus:border-pink-500"
            />
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => handleWithdraw(0)}
              disabled={txLoading || !withdrawAddress}
              className="px-5 py-2 bg-pink-600 hover:bg-pink-700 rounded disabled:opacity-50 transition"
            >
              Withdraw ETH
            </button>
            <button
              onClick={() => handleWithdraw(1)}
              disabled={txLoading || !withdrawAddress}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded disabled:opacity-50 transition"
            >
              Withdraw USDC
            </button>
          </div>
        </div>
      </div>

      {/* Ownership Transfer Section */}
      <div className="bg-black border border-pink-500/20 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-pink-400 mb-4">
          Transfer Ownership
        </h2>
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm text-gray-400 mb-1">
              New Owner Address
            </label>
            <input
              type="text"
              placeholder="0x..."
              id="newOwnerInput"
              className="w-full bg-black border border-pink-500/20 rounded px-3 py-2 text-white focus:outline-none focus:border-pink-500"
            />
          </div>
          <button
            onClick={() => {
              const newOwner = document.getElementById("newOwnerInput").value;
              handleTransferOwnership(newOwner);
            }}
            disabled={txLoading}
            className="px-5 py-2 bg-yellow-600 hover:bg-yellow-700 rounded disabled:opacity-50 transition"
          >
            Transfer Ownership
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-4">
          ⚠️ This action is irreversible. Make sure the new address is correct.
        </p>
      </div>

      {/* Loading overlay (optional) */}
      {txLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-black border border-pink-500 p-6 rounded-xl">
            <p className="text-pink-400">Transaction pending...</p>
          </div>
        </div>
      )}
    </div>
  );
}
