import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: 20 }}>庫存管理系統</h1>
      <div style={{ display: 'grid', gap: 10, gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', marginBottom: 40 }}>
        <Link href="/purchase"><button>進貨</button></Link>
        <Link href="/shelving"><button>上架</button></Link>
        <Link href="/orders"><button>訂單</button></Link>
        <Link href="/inventory"><button>庫存</button></Link>
        <Link href="/reports"><button>報表</button></Link>
        <Link href="/settings"><button>設定</button></Link>
      </div>
      <section style={{ border: '1px solid #ccc', padding: 20 }}>
        <h2>📊 報表統計區塊</h2>
        <p>在此區塊呈現各種統計數據，例如庫存趨勢、銷售排行等。</p>
      </section>
    </main>
  );
}
