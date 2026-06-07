# AI Fashion Assistant

An AI-powered fashion assistant for Kasaragod Fashion that helps users find the perfect outfits from local stores.

## Features

- **Personalized Recommendations**: Suggests outfits based on user needs and occasions
- **Local Store Focus**: Only recommends from available Kanhangad stores
- **Conversational**: Short, friendly, and helpful responses
- **Store Guidance**: Encourages in-store visits and WhatsApp reservations

## Setup

### 1. Get a Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

### 2. Add to Environment Variables

Add the API key to your `.env.local` file:

```env
GEMINI_API_KEY=your_actual_api_key_here
```

### 3. Restart Development Server

```bash
npm run dev
```

## API Usage

### Endpoint

`POST /api/admin/aichat`

### Request Body

```json
{
  "message": "What should I wear to a college party?"
}
```

### Response

```json
{
  "response": "For a college party, I'd suggest a casual hoodie with jeans or chinos. ESQ Mens Store has great streetwear options perfect for this vibe. You can reserve via WhatsApp and try them on in-store!"
}
```

## Frontend Integration

### Example Component

```tsx
import { useState } from 'react';

export default function ChatWidget() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const res = await fetch('/api/admin/aichat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask for fashion advice..."
      />
      <button type="submit">Get Advice</button>
      {response && <p>{response}</p>}
    </form>
  );
}
```

### Demo Component

A ready-to-use demo component is available at:
`app/components/FashionChatDemo.tsx`

You can add it to any page:

```tsx
import FashionChatDemo from '@/app/components/FashionChatDemo';

export default function Page() {
  return <FashionChatDemo />;
}
```

## System Prompt

The AI assistant follows these guidelines:

### Role
- Suggest outfits based on user needs
- Recommend local stores only
- Keep answers short and friendly

### Rules
- ❌ Do NOT mention prices
- ❌ Do NOT suggest online payment
- ✅ Always end with a store recommendation
- ✅ Encourage trying clothes in-store
- ✅ Mention WhatsApp reservation when relevant

### Available Stores
- **ESQ Mens Store** - Men's casual & streetwear
- **EFFENDI** - Premium men's fashion
- **ESPANCHE** - Modern menswear
- **TRENDS** - Men & women everyday fashion

### Tone
- Simple
- Helpful
- Fashion-aware
- Local

## Example Conversations

**User:** "I need something for a college party"

**Assistant:** "For a college party, I'd suggest a casual hoodie with jeans or chinos. ESQ Mens Store has great streetwear options perfect for this vibe. You can reserve via WhatsApp and try them on in-store!"

---

**User:** "What should I wear to a wedding?"

**Assistant:** "For a wedding, go for a sharp blazer with dress pants or a kurta set. EFFENDI has premium formal wear that'll make you stand out. Visit their store in Kanhangad to try on and find the perfect fit!"

---

**User:** "Casual outfit for everyday?"

**Assistant:** "For everyday casual, you can't go wrong with a comfortable t-shirt and jeans combo. TRENDS has a great selection for both men and women. Drop by their store to check out the latest styles!"

## Customization

### Updating Store Information

Edit `ai/systemprompt.ts` to update:
- Store names and descriptions
- Fashion categories
- Response guidelines
- Tone and style

### Modifying AI Behavior

The system prompt in `ai/systemprompt.ts` controls how the AI responds. You can:
- Add more stores
- Change the tone
- Add specific product recommendations
- Include seasonal suggestions

## Cost Considerations

- Gemini API has a free tier with generous limits
- Each API call counts toward your quota
- Monitor usage in [Google AI Studio](https://makersuite.google.com/)

## Security Notes

- API key is stored in `.env.local` (not committed to git)
- Consider adding rate limiting for production
- The endpoint is currently under `/api/admin/` - move to `/api/` for public access

## Future Enhancements

- [ ] Add conversation history
- [ ] Integrate with actual store inventory
- [ ] Include product images in responses
- [ ] Add multi-language support
- [ ] Implement user feedback system
- [ ] Add analytics for popular queries
