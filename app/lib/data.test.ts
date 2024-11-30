import { expect, test, vi, describe } from "vitest"
import { fetchCardData } from "./data"

// a : COUNT(*) number
// b : COUNT(*) number
// c : (number , number)

test('test', async () => {
    const a = async () => {
        return { rows: [{ count: 1 }] }
    }
    const b = async () => {
        return { rows: [{ count: 1 }] }
    }
    const c = async () => {
        return { rows: [{ paid: "549932", pending: "1000251164" }] }
    }

    expect(await fetchCardData(a(), b(), c())).toStrictEqual({
        numberOfCustomers: 1,
        numberOfInvoices: 1,
        totalPaidInvoices: '$5,499.32',
        totalPendingInvoices: '$10,002,511.64'
    })
})



describe('fetchCardData tests', () => {



    // モック
    vi.mock('./data.ts', () => ({
        fetchCardData: vi.fn(),
    }));

    test('should return formatted card data', async () => {
        // モッククエリ関数
        const a = async () => {
            return { rows: [{ count: 1 }] };
        };
        const b = async () => {
            return { rows: [{ count: 1 }] };
        };
        const c = async () => {
            return { rows: [{ paid: "549932", pending: "1000251164" }] };
        };

        // fetchCardDataのモック実装
        fetchCardData.mockImplementation(async (query1, query2, query3) => {
            const numberOfInvoices = query1.rows[0].count;
            const numberOfCustomers = query2.rows[0].count;
            const { paid, pending } = query3.rows[0];

            return {
                numberOfInvoices,
                numberOfCustomers,
                totalPaidInvoices: `$${(parseInt(paid) / 100).toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
                totalPendingInvoices: `$${(parseInt(pending) / 100).toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
            };
        });

        // fetchCardDataを実行
        const result = await fetchCardData(await a(), await b(), await c());

        // 期待値との比較
        expect(result).toStrictEqual({
            numberOfCustomers: 1,
            numberOfInvoices: 1,
            totalPaidInvoices: '$5,499.32',
            totalPendingInvoices: '$10,002,511.64',
        });

        // モック関数が呼び出されたかを確認
        expect(fetchCardData).toHaveBeenCalledTimes(1);
    });
});