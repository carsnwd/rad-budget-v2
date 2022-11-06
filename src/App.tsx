import type { Component } from 'solid-js';
import { AnalysisPanel } from './components/views/AnalysisPanel';
import { BudgetPanel } from './components/views/BudgetPanel';
import { SpendingPanel } from './components/views/SpendingPanel';

const App: Component = () => {
  return (
    <main class="mx-32 text-text-color bg-primary-bg mt-4 min-h-[90vh] overflow-hidden">
      <div class="grid grid-cols-2 gap-4">
        <BudgetPanel></BudgetPanel>
        <div class="grid grid-row-2 gap-4"><SpendingPanel></SpendingPanel><AnalysisPanel></AnalysisPanel></div>
      </div>
    </main>
  );
};

export default App;
