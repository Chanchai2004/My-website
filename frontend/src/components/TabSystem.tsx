import { useState, ReactNode } from 'react';

interface TabItem {
  id: string;
  label: string;
  icon: ReactNode;
  content: ReactNode;
}

interface TabSystemProps {
  tabs: TabItem[];
  defaultTab?: string;
  className?: string;
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export default function TabSystem({ 
  tabs, 
  defaultTab, 
  className = '',
  activeTab: controlledActiveTab,
  onTabChange
}: TabSystemProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(defaultTab || tabs[0]?.id || '');
  
  // ใช้ controlled state ถ้ามี, ไม่งั้นใช้ internal state
  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;
  
  const handleTabChange = (tabId: string) => {
    if (onTabChange) {
      onTabChange(tabId);
    } else {
      setInternalActiveTab(tabId);
    }
  };

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-8 border-b border-[var(--border)]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`flex items-center px-6 py-3 text-sm font-medium border-b-2 transition-all duration-200 ${
              activeTab === tab.id
                ? 'border-[var(--primary)] text-[var(--primary)] bg-[var(--primary)]/5'
                : 'border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--border)]'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTabData?.content}
      </div>
    </div>
  );
}
