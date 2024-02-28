# Thx Pi (SundaeSwap) for snippets

echo

echo "Git commit       = $(git rev-parse HEAD)"
echo "Aiken Version    = $(aiken --version)"

echo
BUTANE_TOKEN_NAME="42544e"
ADMIN_NFT_TOKEN_NAME="53616c6541646d696e"
echo

echo
ADMIN_UTXO_REF_HASH="9fe7265c1022c6a68af14e7d4063b0f7a7832c58255a4a8d219f6fc5285c310a"
ADMIN_UTXO_REF_IDX="0"
ADMIN_UTXO_REF_ENCODED="d8799fd8799f5820${ADMIN_UTXO_REF_HASH}ff$(printf "%02x" $ADMIN_UTXO_REF_IDX)ff"
echo "admin_utxo_ref_encoded = ${ADMIN_UTXO_REF_ENCODED}"
echo

echo

VEST_UTXO_REF_HASH="bcb26980cfc0f06bb8491c3556463d884a83904b53b4310e7d3171ee2063ec6c"
VEST_UTXO_REF_IDX="0"
VEST_UTXO_REF_ENCODED="d8799fd8799f5820${VEST_UTXO_REF_HASH}ff$(printf "%02x" $VEST_UTXO_REF_IDX)ff"
echo "vest_utxo_ref_encoded = ${VEST_UTXO_REF_ENCODED}"

echo "Building..."
aiken build &> /dev/null

echo "Applying vesting_oref..."
aiken blueprint apply -v btn.vest $VEST_UTXO_REF_ENCODED 2> /dev/null > tmp
mv tmp plutus.json
echo "Applying vesting_qty..."
aiken blueprint apply -v btn.vest $"1a017d7840" 2> /dev/null > tmp
mv tmp plutus.json
echo "Applying vesting_decimals..."
aiken blueprint apply -v btn.vest $"06" 2> /dev/null > tmp
mv tmp plutus.json
echo "Extracting vesting policy ID..."
VESTING_POLICY=$(aiken blueprint policy -v btn.vest 2> /dev/null)

echo "Applying init_oref..."
aiken blueprint apply -v nft.nft $ADMIN_UTXO_REF_ENCODED 2> /dev/null > tmp
mv tmp plutus.json

echo "Extracting admin policy ID..."
ADMIN_NFT_POLICY=$(aiken blueprint policy -v nft.nft 2> /dev/null)

echo "Applying vesting policy..."
aiken blueprint apply -v btn.mint "581c${VESTING_POLICY}" 2> /dev/null > tmp
mv tmp plutus.json
echo "Applying admin_pol..."
aiken blueprint apply -v btn.mint "581c${ADMIN_NFT_POLICY}" 2> /dev/null > tmp
mv tmp plutus.json
echo "Applying admin_tn..."
aiken blueprint apply -v btn.mint "5809${ADMIN_NFT_TOKEN_NAME}" 2> /dev/null > tmp
mv tmp plutus.json
echo "Applying token_name..."
aiken blueprint apply -v btn.mint "43${BUTANE_TOKEN_NAME}" 2> /dev/null > tmp
mv tmp plutus.json
BTN_POLICY=$(aiken blueprint policy -v btn.mint 2> /dev/null)

echo
echo -e "Admin Policy ID        = \033[32m ${ADMIN_NFT_POLICY} \033[0m"
echo -e "Vesting Policy ID        = \033[32m ${VESTING_POLICY} \033[0m"
echo -e "BTN Policy ID        = \033[32m ${BTN_POLICY} \033[0m"
echo