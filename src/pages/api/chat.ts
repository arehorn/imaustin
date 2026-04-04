/**
 * Claude Chatbot API Endpoint
 *
 * Phase 2 Implementation:
 * This endpoint will handle chat messages and respond using Claude API
 *
 * TODO:
 * - Install @anthropic-ai/sdk
 * - Add ANTHROPIC_API_KEY to environment
 * - Implement message handling and Claude integration
 * - Add response formatting for frontend
 */

export const POST = async ({ request }) => {
  try {
    // Phase 2: Parse request body
    const body = await request.json();
    const message = body.message;

    if (!message) {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Phase 2: Call Claude API
    // const apiKey = import.meta.env.ANTHROPIC_API_KEY;
    // const response = await claudeClient.messages.create({...});

    // Placeholder response
    return new Response(
      JSON.stringify({
        response: 'Thanks for reaching out! The chatbot is coming in Phase 2. For now, feel free to email me directly.',
        timestamp: new Date().toISOString(),
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
