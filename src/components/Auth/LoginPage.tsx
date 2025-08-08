import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

interface LoginPageProps {
  onLogin: () => void;
  onSkipLogin: () => void;
}

export default function LoginPage({ onLogin, onSkipLogin }: LoginPageProps) {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Calculator className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Hybrid TBL ROI Calculator
            </h1>
            <p className="text-gray-600">
              Access your Triple Bottom Line analysis platform
            </p>
          </div>

          {/* Auth Forms */}
          {mode === 'signin' ? (
            <SignInForm 
              onSuccess={onLogin}
              onSwitchToSignUp={() => setMode('signup')}
            />
          ) : (
            <SignUpForm 
              onSuccess={() => setMode('signin')}
              onSwitchToSignIn={() => setMode('signin')}
            />
          )}

          {/* Divider */}
          <div className="my-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>
          </div>

          {/* Skip Login */}
          <button
            onClick={onSkipLogin}
            className="w-full flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors font-medium"
          >
            <ArrowRight className="w-4 h-4 mr-2" />
            Continue as Guest
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            Guest access provides full functionality without account features
          </p>
        </div>
      </div>
    </div>
  );
}