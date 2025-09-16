
import React from 'react';

const CodeBlock: React.FC<{ children: React.ReactNode, lang: string }> = ({ children, lang }) => (
    <pre className="bg-gray-900 rounded-md p-4 text-sm text-gray-300 overflow-x-auto">
        <code className={`language-${lang}`}>{children}</code>
    </pre>
);

export const WebhookInfo: React.FC = () => {
    const webhookUrl = 'https://your-server.com/path/to/webhook.php';
    
    const curlExample = `curl -X POST ${webhookUrl} \\
-H "Content-Type: application/json" \\
-d '{
  "company": "ExampleCorp",
  "location": "San Francisco, CA"
}'`;

    const phpExample = `<?php
$url = '${webhookUrl}';
$data = [
    'company' => 'ExampleCorp',
    'location' => 'San Francisco, CA'
];

$options = [
    'http' => [
        'header'  => "Content-Type: application/json\\r\\n",
        'method'  => 'POST',
        'content' => json_encode($data),
    ],
];

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

if ($result === FALSE) { /* Handle error */ }

$response = json_decode($result, true);
var_dump($response);
?>`;

    return (
        <div className="mt-6 p-5 border border-gray-700 rounded-lg bg-gray-900/50 space-y-4">
            <h4 className="text-lg font-semibold text-teal-300">Using the Webhook for Integration</h4>
            <p className="text-gray-400 text-sm">
                You can use the provided <code className="bg-gray-700 text-xs p-1 rounded">webhook.php</code> file as a standalone API endpoint. Host it on your server, configure your API key as an environment variable, and send a POST request to its URL.
            </p>
            
            <div>
                <h5 className="font-bold text-gray-300 mb-2">Endpoint URL</h5>
                <p className="text-gray-400 text-sm">Replace the placeholder with the actual URL where you host the file.</p>
                <CodeBlock lang="text">{webhookUrl}</CodeBlock>
            </div>

             <div>
                <h5 className="font-bold text-gray-300 mb-2">Request Body (JSON)</h5>
                <CodeBlock lang="json">{`{
  "company": "string", // Required
  "location": "string" // Optional
}`}</CodeBlock>
            </div>
            
            <div>
                <h5 className="font-bold text-gray-300 mb-2">Example: cURL</h5>
                <CodeBlock lang="bash">{curlExample}</CodeBlock>
            </div>

            <div>
                <h5 className="font-bold text-gray-300 mb-2">Example: PHP</h5>
                <CodeBlock lang="php">{phpExample}</CodeBlock>
            </div>
        </div>
    );
};
