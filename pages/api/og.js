import { ImageResponse } from '@vercel/og';

const getColorData = (colorName) => {
    const data = {
        'Vermelho': { hex: '#ff5252', tag: 'Chama Viva', num: 1 },
        'Laranja': { hex: '#ff9800', tag: 'Fusão', num: 2 },
        'Amarelo': { hex: '#ffeb3b', tag: 'Palco', num: 3 },
        'Verde': { hex: '#4caf50', tag: 'Alicerce', num: 4 },
        'Azul Claro': { hex: '#40c4ff', tag: 'Ventos de Mudança', num: 5 },
        'Azul Índigo': { hex: '#536dfe', tag: 'Coração', num: 6 },
        'Violeta': { hex: '#e040fb', tag: 'Oculto', num: 7 },
        'Rosa': { hex: '#ff4081', tag: 'Coroação', num: 8 },
        'Dourado': { hex: '#ffd740', tag: 'Transmutação', num: 9 },
    };
    return data[colorName] || data['Dourado'];
};

export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const color = searchParams.get('color') || 'Dourado';
    const colorData = getColorData(color);

    return new ImageResponse(
      (
        <div style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colorData.hex,
            backgroundImage: 'radial-gradient(circle at 100% 100%, #1A1A2E 0%, #0F0C29 100%)',
            fontFamily: 'Outfit, sans-serif',
            color: 'white',
            textAlign: 'center',
            padding: '50px'
          }}
        >
          <div style={{ fontSize: 40, letterSpacing: 5, fontWeight: 700, textTransform: 'uppercase', marginBottom: 10, opacity: 0.8 }}>
            Cor da Virada 2026
          </div>
          <div style={{ fontSize: 90, fontWeight: 900, textShadow: '0 5px 20px rgba(0,0,0,0.4)', lineHeight: 1.1 }}>
            {color.toUpperCase()}
          </div>
          <div style={{ fontSize: 35, marginTop: 20, maxWidth: '80%', margin: '0 auto', fontWeight: 300 }}>
            ✨ Sintonizado com: {colorData.tag}
          </div>
          <div style={{ position: 'absolute', bottom: 30, fontSize: 24, opacity: 0.6 }}>
            oraculo-cores.vercel.app
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(e);
    return new Response('Failed to generate the image', { status: 500 });
  }
}